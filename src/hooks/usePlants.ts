'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { plantApi } from '@/lib/api';
import type { IPlant, ICreatePlantRequest, IUpdatePlantRequest, IPlantsResponse, IPlantResponse } from '@/types/shop';
import type { IPaginationParams } from '@/types/index';

export function usePlants(params?: IPaginationParams) {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<IPlantsResponse>({
    queryKey: ['plants', params],
    queryFn: () => plantApi.getPlants(params),
  });

  const addPlant = useMutation<IPlantResponse, Error, ICreatePlantRequest>({
    mutationFn: (newPlant) => plantApi.createPlant(newPlant),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plants'] });
    },
  });

  const updatePlant = useMutation<IPlantResponse, Error, { id: string; data: IUpdatePlantRequest }>({
    mutationFn: ({ id, data }) => plantApi.updatePlant(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plants'] });
    },
  });

  const deletePlant = useMutation<void, Error, string>({
    mutationFn: (id) => plantApi.deletePlant(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plants'] });
    },
  });

  return {
    plants: data?.data.plants ?? [],
    total: data?.data.total ?? 0,
    isLoading,
    error,
    addPlant,
    updatePlant,
    deletePlant,
  };
} 