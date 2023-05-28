import { toast } from 'react-toastify';

const notifyUser = (err: string) => toast.error(err, { position: 'bottom-right' });

export default notifyUser;
