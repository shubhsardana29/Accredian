import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createReferral = async (referralData: any) => {
  try {
    const createdReferral = await prisma.referral.create({
      data: referralData,
    });
    return createdReferral;
  } catch (error) {
    console.error('Error creating referral:', error);
    throw error;
  } finally {
    await prisma.$disconnect(); 
  }
};
