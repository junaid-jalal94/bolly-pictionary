import React from "react";
import { FunctionComponent } from "react";
import './home.css'
import { Button } from "../Button/Button";
import { createClient } from "contentful";

type Props = {

}
export const HomePage : FunctionComponent<Props> = (props: Props) => {

  return (
    <div>
      Welcome to the Bollywood Pictionary!
      <div><Button/></div>
    </div>
  )
} 
