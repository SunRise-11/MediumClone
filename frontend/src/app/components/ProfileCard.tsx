"use client"
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProfileImage from "../components/ProfileImage";
import Input from "../components/Input";
import Button from '@mui/material/Button';
import React, { ChangeEvent, FC, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    visibilityEditModal: boolean;
    handleCloseModal: () => void | null;
}

type FormData = {
    name: string | null;
    bio: string | null;
}

type ValidationError = {
    nameError: string | null;
    bioError: string | null;
}

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 430,
    border: "1px solid #ffffff",
    bgcolor: "background.paper",
    p: 4,
};

const ProfileCard: FC<Props> = ({ visibilityEditModal, handleCloseModal }) => {

    const [form, setForm] = useState<FormData>({ name: null, bio: null })
    const [validationErrors, setValidationErrors] = useState<ValidationError>({ nameError: null, bioError: null })


    const handleChangeForm = (e: ChangeEvent<HTMLInputElement>): void => {
        setValidationErrors({ nameError: null, bioError: null })
        const { name, value } = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    const onClickSubmit = (): void => {
        //TODO: some code here
        handleCloseModal();
    };

    const { name, bio } = form

    const { nameError, bioError } = validationErrors
    return (
        <Modal
            open={visibilityEditModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="rounded-lg shadow-lg outline-none md:w-[500px] lg:w-[600px] w-[400px]">
                <div className="top lg:text-lg w-full flex justify-between font-bold text-base">
                    Profile Information
                    <span className="cursor-pointer text-gray-400 lg:text-lg text-base" onClick={handleCloseModal}>
                        <CloseIcon />
                    </span>
                </div>
                <div className="my-5 flex flex-col">
                    <ProfileImage />
                    <Input
                        onChangeForm={handleChangeForm}
                        name="name"
                        errorMessage={nameError}
                        error={nameError ? true : false}
                        label="Name"
                        required={true}
                        description={"Appears on your Profile page, as your byline, and in your responses.  0/50"} value={name} />
                    <Input
                        onChangeForm={handleChangeForm}
                        name="bio"
                        errorMessage={bioError}
                        error={bioError ? true : false}
                        label="Bio"
                        description={"Appears on your Profile and next to your stories.  0/160"} value={bio} />
                </div>

                <div className="flex justify-end w-full gap-4">
                    <Button className="lg:w-[120px] w-[90px] hidden md:block text-sm" onClick={handleCloseModal} variant="outlined" color="error">
                        Delete Account
                    </Button>
                    <IconButton onClick={handleCloseModal} aria-label="delete" className="sm:block md:hidden">
                        <DeleteIcon />
                    </IconButton>
                    <Button onClick={handleCloseModal} variant="outlined" color="success">
                        Cancel
                    </Button>
                    <Button onClick={onClickSubmit} variant="outlined" color="success">
                        Submit
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ProfileCard;
