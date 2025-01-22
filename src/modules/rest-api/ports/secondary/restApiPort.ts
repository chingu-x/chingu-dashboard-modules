import type {
  DeleteParams,
  GetParams,
  PatchParams,
  PostParams,
} from "../../application/entities/restApiParams";

export interface RestApiPort {
  get: <X>(params: GetParams) => Promise<X>;

  post: <X, Y>(params: PostParams<X>) => Promise<Y>;

  patch: <X, Y>(params: PatchParams<X>) => Promise<Y>;

  delete: <X>(params: DeleteParams) => Promise<X>;
}
