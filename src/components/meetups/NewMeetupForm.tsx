"use client";

import { FormEventHandler } from "react";
import classes from "./NewMeetupForm.module.css";
import { MeetupData, OnMeetups } from "@/types/interface";
import { useRef } from "react";

export default function NewMeetupForm(props: OnMeetups) {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    const enterdTitle = titleRef.current!.value;
    const enterdImage = imageRef.current!.value;
    const enterdAddress = addressRef.current!.value;
    const enterdDescription = descriptionRef.current!.value;

    const meetupData: MeetupData = {
      title: enterdTitle,
      image: enterdImage,
      address: enterdAddress,
      description: enterdDescription,
    };
    return props.addMeetups(meetupData);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label htmlFor="title">Meetup Title</label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력하세요."
          ref={titleRef}
        />
        <label htmlFor="image">Meetup Image</label>
        <input
          type="url"
          id="image"
          placeholder="이미지 경로를 입력하세요."
          ref={imageRef}
        />
        <label htmlFor="address">Meetup Address</label>
        <input
          type="text"
          id="address"
          placeholder="주소를 입력하세요."
          ref={addressRef}
        />
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={5} ref={descriptionRef}></textarea>
      </div>
      <button>submit</button>
    </form>
  );
}
