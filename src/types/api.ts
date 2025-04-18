import { IPlant, IOrder, ICart, IAddress } from './shop';
import { IApiResponse, IPaginationParams } from './index';

// API Endpoints
export interface IApiEndpoints {
  plants: string;
  cart: string;
  orders: string;
  auth: string;
}

// Request Types
export interface ICreatePlantRequest extends Omit<IPlant, 'id' | 'createdAt' | 'updatedAt' | 'reviews'> {}
export interface IUpdatePlantRequest extends Partial<ICreatePlantRequest> {}

export interface ICreateOrderRequest {
  items: ICart['items'];
  shippingAddress: IAddress;
}

// Response Types
export interface IPlantsResponse extends IApiResponse<{
  plants: IPlant[];
  total: number;
  params: IPaginationParams;
}> {}

export interface IPlantResponse extends IApiResponse<IPlant> {}
export interface ICartResponse extends IApiResponse<ICart> {}
export interface IOrderResponse extends IApiResponse<IOrder> {}

// Error Types
export interface IApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
} 