import withAuthGuard from './withAuthGuard';

export default function withLoggedGuard() {
  return withAuthGuard((guardToken, { onGuardReplace }) => {
    if (!guardToken) {
      onGuardReplace('/login');
    }
  });
}
