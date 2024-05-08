
import React from "react";
import { FunctionComponent } from "react";
import './button.css'
import useContenful from "../../useContentful";
import { useState, useEffect } from "react";

type Props = {
  
}


export const Button : FunctionComponent<Props> = (props: Props) => {
  const [movies, setMovies] = useState();
  const { getMovies } = useContenful();
  const onButtonPress = () => {
    getMovies().then((response) => {
      console.log(response);
    })
  }
  return (
    <button onClick={onButtonPress}>Go!</button>
  )
}
