import { injectable } from "tsyringe";
import { formatInTimeZone } from "date-fns-tz";
import { GetVoyageResourceDateUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetVoyageResourceDateResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class GetVoyageResourceDateUsecase {
  execute({
    voyageResources,
    timezone,
  }: GetVoyageResourceDateUsecaseDto): GetVoyageResourceDateResponseDto {
    return voyageResources.map((resource) => ({
      ...resource,
      updatedAt: formatInTimeZone(resource.updatedAt, timezone, "MMM dd, yyyy"),
    }));
  }
}
