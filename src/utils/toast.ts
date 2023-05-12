import { toast } from 'react-toastify';

const notifyUser = (err: unknown) => toast.error(err.toString(), { position: 'bottom-right' });

export default notifyUser;
