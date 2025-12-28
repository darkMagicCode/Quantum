import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { updateProfile } from '../../../redux/features/profile';
import { profileSchema, type ProfileFormData } from '../schemas';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: profile.name,
      phone: profile.phone,
      jobTitle: profile.jobTitle,
      yearsOfExperience: profile.yearsOfExperience,
      address: profile.address,
      workingHours: profile.workingHours,
    },
  });

  useEffect(() => {
    form.reset({
      name: profile.name,
      phone: profile.phone,
      jobTitle: profile.jobTitle,
      yearsOfExperience: profile.yearsOfExperience,
      address: profile.address,
      workingHours: profile.workingHours,
    });
  }, [profile, form]);

  const onSubmit = (data: ProfileFormData) => {
    dispatch(updateProfile(data));
  };

  return {
    form,
    onSubmit,
    profile,
  };
};

