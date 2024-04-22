import "./LoadingData.css";
export default function LoadingData(){
    return(
        <>
            <div style={{marginTop: "100px"}} className="d-flex justify-content-center align-items-center">Please wait a second...</div>
            <div className="spinner" >
                <div className="double-bounce1"></div >
                <div className="double-bounce2"></div >
            </div >
        </>
    )
}