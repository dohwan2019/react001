import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Contact {
    id: number
    name: string
    phone: string
}

const api = axios.create({
    baseURL: 'http://192.168.0.131:8080/api'
});

const Contacts = () => {
    const [newContact, setNewContact] = useState<Partial<Contact>>({
        name:"",
        phone:""
    });
    const [contacts, setContacts] = useState<Contact[]>([]);

    const getAllContacts = async () => {
        try {
            const res = await api.get('/contacts');
            console.log(res);
            setContacts(res.data);
        } catch(e) {
            console.log('getAllContacts catch', e);
        } 
    };

    const createContact =async () => {
        if ( !newContact.name ) {
            alert("이름을 입력하세요 !!!");
            return;
        }
        if ( !newContact.phone ) {
            alert("전화번호를 입력하세요 !!!");
            return;
        }

        try {
            console.log(newContact);
            const res = await api.post("/contacts", newContact);

            getAllContacts();

            setNewContact({name:"", phone:""});
        } catch (error) {
            console.log('createContact', error);
        }
    };

    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <hr />
            <form>
                <label htmlFor="nm">이름</label>
                <input 
                    type="text" 
                    id="nm" 
                    value={newContact.name} 
                    onChange={(e) => {
                        setNewContact({...newContact, name:e.target.value})
                    }} 
                />
                <br />
                <label htmlFor="ph">전화번호</label>
                <input 
                    type="text" 
                    id="ph" 
                    value={newContact.phone} 
                    onChange={(e) => {
                        setNewContact({...newContact, phone:e.target.value})
                    }} 
                />
                <br />
                <button type="button" onClick={createContact}>추가</button>
            </form>
            <br />
            <h2>연락처 목록</h2>
            <table border={1} cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(d => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;