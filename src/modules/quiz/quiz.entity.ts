import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizes')
export class Quiz extends BaseEntity{
@PrimaryGeneratedColumn({
    comment:'the Quiz unique identifier',
})
id: number;

@Column({
    type: 'varchar',
})
title:string;


@Column({
    type: 'text'
})
description:string;

}