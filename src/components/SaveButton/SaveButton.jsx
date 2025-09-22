import useOnlineStatus from '../../hooks/useOnlineStatus'

function SaveButton(){
    const isOnline = useOnlineStatus()

    function handleSaveClick(){
        console.log("save clicked!")
    }

    return (
        <>
            <button  disabled={!isOnline} onClick={handleSaveClick}>
                { isOnline ? "Save progress" : "Reconecting..." }
            </button>
        </>
    )
}

export default SaveButton