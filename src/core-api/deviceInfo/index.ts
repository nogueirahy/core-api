export interface IDeviceInfo {
  getDeviceId(): string;
  isEmulator(): Promise<boolean>;
}

abstract class DeviceInfo implements IDeviceInfo {
  
  abstract getDeviceId(): string 

  abstract isEmulator(): Promise<boolean> 
}

export default DeviceInfo