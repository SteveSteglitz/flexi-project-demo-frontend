export class BaseDynamicInfoMapper{
  static map(rawData: any): any {
    switch (rawData.fieldtype) {
      case 'boolean':
        return { ...rawData, fieldvalue: rawData.fieldvalue === 'true' || rawData.fieldvalue === true };
      case 'string':
        return { ...rawData, fieldvalue: String(rawData.fieldvalue) };
      case 'decimal':
        return { ...rawData, fieldvalue: parseFloat(rawData.fieldvalue) };
      case 'date':
        return { ...rawData, fieldvalue: new Date(rawData.fieldvalue) };
      default:
        throw new Error('Unbekannter fieldtype');
    }
  }
}
