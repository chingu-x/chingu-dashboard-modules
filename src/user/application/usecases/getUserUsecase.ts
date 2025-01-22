import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { type UserApiPort } from "../../ports/secondary/userApiPort";
import { type GetUserResponseDto } from "../../application/dtos/response.dto";
import { transformDateToUserTimezone } from "../../application/utils/dateTransform";

@injectable()
export class GetUserUsecase {
  constructor(
    @inject(TYPES.UserApiPort)
    private readonly userApi: UserApiPort,
  ) {}

  async execute(): Promise<GetUserResponseDto> {
    const data = await this.userApi.getUser();

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

// refactor below code to separate module when ready

const currentDate =
  process.env.NODE_ENV === "development"
    ? new Date(2024, 5, 1, 12)
    : new Date();
