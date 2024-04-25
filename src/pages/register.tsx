import { useState, useEffect, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Register = () => {

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%]).{8,32}$/;

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLDivElement>(null); 

    const [ user, setUser ] = useState<string>('');
    const [ validName, setValidName ] = useState<boolean>(false);
    const [ userFocus, setUserFocus ] = useState<boolean>(false);

    const [ pwd, setPwd ] = useState<string>('');
    const [ validPwd, setValidPwd ] = useState<boolean>(false);
    const [ pwdFocus, setPwdFocus ] = useState<boolean>(false);

    const [ matchPwd, setMatchPwd ] = useState<string>('');
    const [ validMatch, setValidMatch ] = useState<boolean>(false);
    const [ matchFocus, setMatchFocus ] = useState<boolean>(false);
    
    const [ errMsg, setErrMsg ] = useState<string>('');
    const [ success, setSuccess ] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // If the button was hacked and trying to pass invalid data
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        if(!v1 || !v2) {
            setErrMsg("invalid entry");
            return;
        }

        console.log(user, pwd)
        setSuccess(true);
    };

    useEffect( () => {
        userRef.current?.focus();
    }, []) 

    // to validate the User
    useEffect(() => {
        USER_REGEX.test(user) ? setValidName(USER_REGEX.test(user)) : console.log("User name : ", user, " not valid");
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [ pwd, matchPwd ]);

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    return(
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" > { errMsg } </p>
            <h1> Register </h1>

            <form onSubmit={handleSubmit}>
                {/* username input */}
                <label htmlFor="username"> 
                    Username : 
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                </label>
                <input id='username' type="text" required ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={()=>setUserFocus(false)}></input>
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters. <br/>
                    Must begin with a letter. <br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                {/* pwd input */}
                <label htmlFor="password">
                    Password : 
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input id="password" type="password" required onChange={(e)=>setPwd(e.target.value)}  aria-invalid={validPwd ? "false":"true"} aria-describeby="pwdnote" onFocus={()=>setPwdFocus(true)} onBlur={()=>{setPwdFocus(false)}}></input>
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} /> 
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and a special character. <br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span>
                                                <span aria-label="at symbol">@</span> 
                                                <span aria-label="hashtag">#</span>
                                                <span aria-label="dollar sign">$</span>
                                                <span aria-label="percent">%</span>
                </p>
                {/* pwd match */}
                <label htmlFor="confirm_pwd">
                    Confirm Password : 
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                </label>
                <input id="confirm_pwd" type="password" required onChange={(e)=>{setMatchPwd(e.target.value)}} aria-invalid={validMatch ? "false" : "true" } aria-describedby="confirmnote" onFocus={()=>setMatchFocus(true)} onBlur={()=>setMatchFocus(false)}/>
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions":"offscreen"}> 
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field
                </p>
                <button disabled={!validName || !validPwd || !validMatch ? true : false}> Sign Up </button>
            </form>
            <p>
                Already registered? <br />
                <span className="line">
                    {/* put router link here */}
                    <a href="#"> Sign in</a>
                </span>
            </p>
        </section>
    );
}