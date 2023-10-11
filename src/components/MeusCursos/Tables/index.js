import React from "react"
import styles from "../styles.module.css"

const Head = ({ keys, head }) => {
    return (
        <thead className={styles.Head}>
            <tr>
                {
                    keys.map(key => <th key={key}>{head[key] || key}</th>)
                }
            </tr>
        </thead>
    )
}

const Row = ({ record }) => {
    const keys = Object.keys(record)
    return (
        <tr className={styles.nova_linha} key={record.id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
        </tr>
    )
}
const Table = ({ data, head }) => {
    const keys = Object.keys(data[0])
    return (
        <table className={styles.tables}>
            <Head keys={keys} head={head} />
            <tbody>
                { data.map(record => <Row record={record} />) }
            </tbody>
        </table>
    )
}

export default Table