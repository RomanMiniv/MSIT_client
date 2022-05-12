import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './ModalWindow.scss';

export const MySwal = withReactContent(Swal);

export const showModalWindow = (content, contentStyles, props, callback) => {
    MySwal.fire({
        showCloseButton: true,
        focusConfirm: false,
        allowEscapeKey: false,
        html: (
            <div style={contentStyles}>
                {content}
            </div>
        ),
        ...props
    }).then(result => {
        if (callback) {
            callback(result);
        }
    });
}
