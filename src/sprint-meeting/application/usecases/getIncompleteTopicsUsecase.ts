import { injectable } from "tsyringe";
import { GetIncompleteTopicsUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetIncompleteTopicsResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetIncompleteTopicsUsecase {
  execute({
    agendas,
  }: GetIncompleteTopicsUsecaseDto): GetIncompleteTopicsResponseDto {
    return agendas.filter((agenda) => agenda.status === false);
  }
}
