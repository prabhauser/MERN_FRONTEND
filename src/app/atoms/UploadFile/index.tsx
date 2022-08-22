import { useRef, useState, useContext } from 'react';
import AlertBox from '../AlertBox/index';
import Button from '../Button/index';
import PermissionsContext from '../../context/PermissionsContext';

type UploadProps = {
    disabled?: boolean;
    document: any;
    singleUpload?: boolean;
    customClassName?: string;
};

const UploadFile = (props: UploadProps) => {
    const { disabled = false, document, singleUpload = true, customClassName } = props;
    const [uploadFileAlert, setUploadFileAlert] = useState(false);
    const [errorAlertMessage, setErrorAlertMessage] = useState('');
    const fileTypes = '.jpg,.jpeg,.pdf';
    const inputFile = useRef(null);

    const userData = useContext(PermissionsContext);
    const handleClick = () => {
        //  inputFile?.current && inputFile.current.click();
    };

    const isAllowedFileExtension = (file: any) =>
        fileTypes && fileTypes.includes(file.name.split('.').pop().toLowerCase());

    const handleFileUpload = (event: any) => {
        if (event?.target?.files?.length) {
            const formData = new FormData();
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                formData.append('media', files[i]);
            }
            formData.append('categoryId', document?.categoryId);
            formData.append('loginId', userData?.user?.userId);
            formData.append('documentTypeId', document?.documentTypeId);
            formData.append('formId', document?.formId);
            //executeAWSAction(bundle);
        }
    };

    const validateFileSize = (event: any) => {
        if (!event?.target?.files?.length) {
            return;
        }
        const fileMaxSize = 5242880;
        const filesList = event.currentTarget.files;
        const files = [...filesList];

        const inValidFileSize = files?.find((file) => {
            if (file.size > fileMaxSize) {
                return true;
            }
        });

        if (inValidFileSize) {
            if (files?.length === 1) {
                setErrorAlertMessage('Max file size is 5MB.');
            } else {
                setErrorAlertMessage('Max file size is 5MB. One of the file size is more than 5 MB. Please Reupload');
            }
            setUploadFileAlert(true);
            return;
        }

        const inValidFileExtension = files?.find((file) => {
            if (!isAllowedFileExtension(file)) {
                return true;
            }
        });

        if (inValidFileExtension) {
            setErrorAlertMessage(`Only ${fileTypes} Format is allowed`);
            setUploadFileAlert(true);
            return;
        }

        return handleFileUpload(event);
    };

    return (
        <>
            <AlertBox
                isOpen={uploadFileAlert}
                handleClose={() => {
                    setUploadFileAlert(false);
                }}
                modalContent={errorAlertMessage}
                rightBtnPress={() => {
                    setUploadFileAlert(false);
                }}
            />
            <input
                accept={fileTypes}
                style={{ display: 'none' }}
                ref={inputFile}
                onChange={validateFileSize}
                type="file"
                multiple={singleUpload ? false : true}
            />
            <Button
                className={customClassName ? customClassName : ''}
                name={'UPLOAD'}
                secondary={true}
                type="button"
                handleClick={handleClick}
                disabled={disabled}
            />
        </>
    );
};

export default UploadFile;
