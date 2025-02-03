import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { UserApiPort } from "@/user/ports/secondary/userApiPort";
import { FetchUserResponseDto } from "@/user/application/dtos/response.dto";
import { transformDateToUserTimezone } from "@/timezone/application/utils/dateTransform";
import { FetchCurrentUserClientRequestDto } from "@/user/application/dtos/request.dtos";

@injectable()
export class FetchUserUsecase {
  constructor(
    @inject(TYPES.UserApiPort)
    private readonly userApi: UserApiPort,
  ) {}

  async execute({
    currentDate,
  }: FetchCurrentUserClientRequestDto): Promise<FetchUserResponseDto> {
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
