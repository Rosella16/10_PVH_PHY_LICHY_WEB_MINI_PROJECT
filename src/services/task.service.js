export const getAllTask = async () =>{
 const res = await fetch('',
{
    headers: {
        authorization : `Bearer ${session?.user?.token}` ,
    },
    },
);
};