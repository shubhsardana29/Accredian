import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';

const schema = z.object({
  referrerName: z.string().min(1, 'Referrer name is required'),
  referrerEmail: z.string().email('Invalid email'),
  refereeName: z.string().min(1, 'Referee name is required'),
  refereeEmail: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

interface ReferralFormProps {
  onClose: () => void;
  onSubmitSuccess: () => void;
}

interface ApiError {
  errors?: { field: string; message: string }[];
  message?: string;
}

const ReferralForm: React.FC<ReferralFormProps> = ({ onClose, onSubmitSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      await axios.post('https://accredian-nphg.onrender.com/api/referrals/submit', data);
      onSubmitSuccess();
      onClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>;
        if (axiosError.response?.data?.errors) {
          axiosError.response.data.errors.forEach((err) => {
            setError(err.field as keyof FormData, { message: err.message });
          });
        } else {
          setServerError(
            axiosError.response?.data?.message || 'An error occurred. Please try again.',
          );
        }
      } else {
        setServerError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {serverError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{serverError}</span>
        </div>
      )}

      <div>
        <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          {...register('referrerName')}
          type="text"
          id="referrerName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.referrerName && (
          <p className="mt-1 text-sm text-red-600">{errors.referrerName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          {...register('referrerEmail')}
          type="email"
          id="referrerEmail"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.referrerEmail && (
          <p className="mt-1 text-sm text-red-600">{errors.referrerEmail.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">
          Friend's Name
        </label>
        <input
          {...register('refereeName')}
          type="text"
          id="refereeName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.refereeName && (
          <p className="mt-1 text-sm text-red-600">{errors.refereeName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">
          Friend's Email
        </label>
        <input
          {...register('refereeEmail')}
          type="email"
          id="refereeEmail"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.refereeEmail && (
          <p className="mt-1 text-sm text-red-600">{errors.refereeEmail.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ReferralForm;
