import { upperFirst, camelCase } from 'lodash';

export default {
  install(app) {
    const componentFiles = import.meta.globEager('./components/Base*');

    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      );
      app.component(componentName, m.default);
    });
  },
};
