import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { resolveContent } from "nodemailer/lib/shared";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchData(){
    const [recordsd, SetReciords] = useStae([])

    useEffect(()=>{
        fetch('https://kriptokyng.com/api/blocks')
        .then (response => response.json())
        .then (data => SetReciords( data))
        .catch(err => console.log(err))
    })
}