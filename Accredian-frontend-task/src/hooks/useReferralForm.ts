import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { referralSchema, ReferralFormData } from '../utils/validation';

const useReferralForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
  });

  const onSubmit = (data: ReferralFormData) => {
    console.log(data);
    // Handle form submission (e.g., API call)
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useReferralForm;
