import miniAppProfile from 'miniAppProfile/module';
import miniAppHome from 'miniAppHome/module';

class ModuleRegistry<T> {
  private constructor(private registry: T) {}
  register<K extends string, S>(
    key: K,
    module: S,
  ): ModuleRegistry<Record<K, S> & T> {
    (this.registry as any)[key] = module;
    return this as any as ModuleRegistry<Record<K, S> & T>;
  }

  getModule<K extends keyof T>(key: K): T[K] {
    if (!(key in this.registry)) {
      throw new Error('Invalid type' + key);
    }
    return this.registry[key];
  }

  static init(): ModuleRegistry<{}> {
    return new ModuleRegistry({});
  }
}

const registry = ModuleRegistry.init()
.register(
  miniAppProfile.prefix,
  miniAppProfile,
)
.register(
  miniAppHome.prefix,
  miniAppHome,
)

export default {
  miniAppProfile: registry.getModule(miniAppProfile.prefix),
  miniAppHome: registry.getModule(miniAppHome.prefix),
}
