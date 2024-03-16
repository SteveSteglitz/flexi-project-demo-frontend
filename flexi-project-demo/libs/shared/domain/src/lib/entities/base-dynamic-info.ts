export interface BaseDynamicInfo{
  id: string,
  fieldname: string,
  fieldlabel: string,
  fieldtype: 'boolean' | 'string' | 'decimal' | 'date';
  fieldvalue: boolean | string | number | Date;
}
