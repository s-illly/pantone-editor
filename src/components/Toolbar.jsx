function Toolbar ({ onUpload, onExport }) {
    return (
        <div className= "flex gap-4 p-4 bg-white shadow">
            <input type="file" accept="image/*" onChange={onUpload}/>
            <button
                onClick={onExport}
                className="px-4 py-2 bg-black text-white rounded">
                    Export PNG
            </button>
        </div>
    );
}

export default Toolbar;
