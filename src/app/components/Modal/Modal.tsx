import { useState } from "react"
import ReactModal from "react-modal"
import "../../main.css"
import { NotifyInput } from "./NotifyInput/NotifyInput"
import { UserInput } from "./UserInput"
import Image from "next/image"
import help from '../../assets/help-circle.svg';
import { FormButton } from "./FormButton"
import { DescriptionInput } from "./DescriptionInput"
import { RangeInput } from "./RangeInput"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal inset-x-auto"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2 className="text-main font-bold text-2xl mb-2">
          Create a new scrape
        </h2>
        <p className="font-normal text-sm text-grey mb-5">
          Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas
          integer. Purus ipsum amet scelerisque commodo dui ut.
        </p>
        <UserInput title="Name" placeholder="Enter a name" isIcon={false}/>
        <UserInput title="Upwork RSS feed URL" placeholder="Enter a URL" isIcon={true}/>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            <p className="mb-2 font-medium text-main text-sm inline-block mr-1">
              Scrape interval
            </p>
            <Image src={help} alt="help" className="inline-block"/>
            <RangeInput />
          </label>
        </div>
        <DescriptionInput />
        <div className="mb-6">
          <p className="mb-3 text-main">Notify</p>
          <p className="text-grey font-normal text-xs">
            Whenever a new job has been found, add the channels you wish the
            notifications to me emitted too
          </p>
        </div>
        <NotifyInput title="Email" placeholder="Enter your email" />
        <NotifyInput title="Description" placeholder="Enter Discord Webhook URL"/>
        <NotifyInput title="Slack" placeholder="Enter Slack Webhook URL" />
        <div className="flex justify-between mt-8">
          <FormButton title="Cancel" onClose={onClose} classToAdd="" />
          <FormButton title="+ Create" onClose={onClose} classToAdd=" bg-blue text-lightWhite" />
        </div>
      </div>
    </ReactModal>
  )
}
