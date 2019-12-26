import { ChangeDetectionStrategiesEnum } from 'src/app/enums/change-detection-strategies.enum';
import { ComponentsStructureModel }      from 'src/app/models/components-structure.model';

export const COMPONENTS_STRUCTURE_CONFIG: ComponentsStructureModel = {
  changeDetection: ChangeDetectionStrategiesEnum.Default,
  children: [
    {
      changeDetection: ChangeDetectionStrategiesEnum.Default,
      children: [
        {
          changeDetection: ChangeDetectionStrategiesEnum.Default,
          children: [
            {
              changeDetection: ChangeDetectionStrategiesEnum.Default,
              children: null,
            },
            {
              changeDetection: ChangeDetectionStrategiesEnum.OnPush,
              children: null,
            },
          ],
        },
        {
          changeDetection: ChangeDetectionStrategiesEnum.OnPush,
          children: [
            {
              changeDetection: ChangeDetectionStrategiesEnum.Default,
              children: null,
            },
            {
              changeDetection: ChangeDetectionStrategiesEnum.OnPush,
              children: null,
            },
          ],
        },
      ],
    },
    {
      changeDetection: ChangeDetectionStrategiesEnum.OnPush,
      children: [
        {
          changeDetection: ChangeDetectionStrategiesEnum.Default,
          children: [
            {
              changeDetection: ChangeDetectionStrategiesEnum.Default,
              children: null,
            },
            {
              changeDetection: ChangeDetectionStrategiesEnum.OnPush,
              children: null,
            },
          ],
        },
        {
          changeDetection: ChangeDetectionStrategiesEnum.OnPush,
          children: [
            {
              changeDetection: ChangeDetectionStrategiesEnum.Default,
              children: null,
            },
            {
              changeDetection: ChangeDetectionStrategiesEnum.OnPush,
              children: null,
            },
          ],
        },
      ],
    },
  ],
};
