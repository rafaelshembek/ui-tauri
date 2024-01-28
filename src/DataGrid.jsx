import React, { } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        editable: true
    },
    {
        field: 'Funcionario',
        width: 150,
        editable: true
    },
    {
        field: 'Ocupacao',
        headerName: 'Ocupação',
        width: 150,
        editable: true
    },
    {
        field: 'Horario',
        headerName: 'Horario de trabalho',
        width: 160,
    },
    {
        field: 'Situacao',
        headerName: 'Situação',
        type: Boolean,
        width: 160,
    },
];

const rows = [
    { id: 1, Funcionario: "rafae silva", Ocupacao: "Desenvolvedor", Horario: "13:30", Situacao: true },
    { id: 2, Funcionario: "João", Ocupacao: "Desenvolvedor", Horario: "13:30", Situacao: true },
    { id: 3, Funcionario: "Maria", Ocupacao: "Designer", Horario: "13:30", Situacao: true },
    { id: 4, Funcionario: "Ana", Ocupacao: "Engenheira Civil", Horario: "13:30", Situacao: true },
    { id: 5, Funcionario: "Pedro", Ocupacao: "Professor", Horario: "13:30", Situacao: true },
    { id: 6, Funcionario: "Laura", Ocupacao: "Médica", Horario: "13:30", Situacao: true },
    { id: 7, Funcionario: "Mariana", Ocupacao: "Jornalista", Horario: "13:30", Situacao: true },
    { id: 8, Funcionario: "Isabel", Ocupacao: "Contadora", Horario: "13:30", Situacao: true }
];

export default () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}