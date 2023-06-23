import React from "react";
import { Genre } from "./styles";

export default function GenresTag({genre, onClick}) {
    return (
        <Genre onClick={() => onClick(genre)}>{genre}</Genre>
    );
}
