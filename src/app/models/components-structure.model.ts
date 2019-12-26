import { ChangeDetectionStrategiesEnum } from 'src/app/enums/change-detection-strategies.enum';

export interface ComponentsStructureModel {
  changeDetection: ChangeDetectionStrategiesEnum;
  children: ComponentsStructureModel[] | null;
}
