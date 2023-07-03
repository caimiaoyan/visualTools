import Input, { TextArea, CustomInputNumber } from './Input';
import Radio from './Radio';
import CustomCheckbox from './Checkbox';
import CustomSwitch from './Switch';
import ColorPicker from './ColorPicker';
import { Select, Slider } from 'antd';

export const fields = {
  Text: Input,
  Number: CustomInputNumber,
  Radio,
  Select,
  TextArea,
  Slider,
  Checkbox: CustomCheckbox,
  Switch: CustomSwitch,
  ColorPicker,
};
