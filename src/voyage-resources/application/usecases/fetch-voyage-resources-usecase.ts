import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";

@injectable()
export class FetchVoyageResourcesUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(props: LoginUsecaseDto): Promise<LoginResponseDto> {
    return await this.authApi.login({
      ...props,
    });
  }
}
