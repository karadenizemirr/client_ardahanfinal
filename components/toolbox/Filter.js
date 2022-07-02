export const Filter = ({filter, setFilter}) => {
    return (
        <div className="mt-3 mb-3">
            <input 
            placeholder="Aranacak kelime.."
            className="border-2 p-1 rounded-md" 
            value={filter || ''}onChange={(e) => setFilter(e.target.value)}  />
        </div>
    )
}