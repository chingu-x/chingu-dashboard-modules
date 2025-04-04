import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { UserApiPort } from "@/user/ports/secondary/user-api-port";
import { FetchUserResponseDto } from "@/user/application/dtos/response.dto";
import { transformDateToUserTimezone } from "@/timezone/application/utils/date-transform";
import { FetchCurrentUserUsecaseDto } from "@/user/application/dtos/usecase.dto";

@injectable()
export class FetchUserUsecase {
  constructor(
    @inject(TYPES.UserApiPort)
    private readonly userApi: UserApiPort,
  ) {}

  async execute({
    currentDate,
  }: FetchCurrentUserUsecaseDto): Promise<FetchUserResponseDto> {
    const data = await this.userApi.fetchUser();

    const userWithDate = {
      ...data,
      currentDateInUserTimezone: transformDateToUserTimezone(
        currentDate,
        data.timezone,
      ),
    };

    return userWithDate;
  }
}
