

const StatusMessage = ({ message, type='info' }) => {
    const colors = {
        info: '#007bff',
        success: '#28a745',
        error:' #dc3545',
    };

    return (
        <div className="w-full flex justify-center items-center text-center text-2xl font-semibold"
        style={ {
            padding: '80px',
            backgroundColor: colors[type] || '#ccc',
            color: 'white',
            
            
        }}>
            {message}
        </div>
    );
};

export default StatusMessage;