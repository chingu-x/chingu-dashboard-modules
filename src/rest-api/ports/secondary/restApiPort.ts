import type {
  DeleteRequestDto,
  GetRequestDto,
  PatchRequestDto,
  PostRequestDto,
} from "@/rest-api/application/dtos/request.dto";

export interface RestApiPort {
  get: <X>(params: GetRequestDto) => Promise<X>;

  post: <X, Y>(params: PostRequestDto<X>) => Promise<Y>;

  patch: <X, Y>(params: PatchRequestDto<X>) => Promise<Y>;

  delete: <X>(params: DeleteRequestDto) => Promise<X>;
}
