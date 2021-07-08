import DeviceInfo, { IDeviceInfo } from '../core-api/deviceInfo';
import ModuleRegistry from './ModuleRegistry';

interface ICreateApi {
  miniAppProfile: any;
  miniAppHome: any;
  deviceInfo: IDeviceInfo;
}

class CoreApi implements ICreateApi {
  public deviceInfo: DeviceInfo;
  public miniAppHome: any;
  public miniAppProfile: any;

  constructor(deviceInfoNative: IDeviceInfo) {
    this.deviceInfo = {
      getDeviceId: deviceInfoNative.getDeviceId,
      isEmulator: deviceInfoNative.isEmulator,
    };
    this.miniAppHome = () => ModuleRegistry.miniAppHome
    this.miniAppProfile =  () => ModuleRegistry.miniAppProfile
  }
}

export default CoreApi;
