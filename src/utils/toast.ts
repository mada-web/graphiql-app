import { toast } from 'react-toastify';

const notifyUser = (err: string) => toast.error(err.toString(), { position: 'bottom-right' });

export default notifyUser;
