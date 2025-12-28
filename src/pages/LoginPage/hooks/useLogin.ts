import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { login } from '../../../redux/features/auth';
import { useNavigate } from 'react-router-dom';
import { loginSchema, loginDefaultValues, type LoginFormData } from '../schemas';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate('/users');
    } catch {
    }
  };

  return {
    form,
    onSubmit,
    loading,
    error,
  };
};

