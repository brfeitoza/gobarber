interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.APP_MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'azotief@azotief.dev',
      name: 'Bruno Fernando Feitoza | Azotief',
    },
  },
} as IMailConfig;
