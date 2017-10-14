import withAuthGuard from './withAuthGuard';

export default function withGuestGuard() {
  return withAuthGuard((guardToken, { onGuardReplace }) => {
    if (guardToken) {
      onGuardReplace('/');
    }
  });
}
