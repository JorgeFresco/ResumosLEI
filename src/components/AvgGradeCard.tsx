import {Card, CardContent, Typography, Box, Tooltip} from "@mui/material";
import React from "react";
import AverageGrade from "@/interfaces/average_grade";
import Course from "@/interfaces/course";
import HelpIcon from '@mui/icons-material/Help';

type AvgGradeCardProps = {
    data: AverageGrade;
    course: Course;
};

export default function AvgGradeCard({data, course}: AvgGradeCardProps) {
    const isAverageNumeric = data.average != null;

    return (
        <Card sx={{borderLeft: `5px solid ${course.color}`, boxShadow: 2}}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Esquerda */}
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {data.year}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Inscritos:</strong> {data.enrolled}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Taxa de Reprovação:</strong> {data.failed}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Professor(a):</strong> {data.professor}
                        </Typography>
                    </Box>

                    {/* Direita (Média em destaque ou N/A) */}
                    <Box textAlign="right">
                        {isAverageNumeric ? (
                            <>
                                <Typography variant="h4" fontWeight="bold" color="primary">
                                    {data.average}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <Typography variant="h5" fontWeight="bold" color="text.secondary">
                                        Sem dados
                                    </Typography>
                                    <Tooltip
                                        title="Não foi possível calcular a média exata porque não estão disponíveis todas as notas">
                                        <HelpIcon color="secondary" fontSize="small"/>
                                    </Tooltip>
                                </Box>
                            </>
                        )}
                        <Typography variant="body2" color="text.secondary">
                            Média
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
