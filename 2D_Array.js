//There is some error but I have write all that is given in the Bro code playlist video

const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]
                ['*', 0, '#']];     //We can give the indefinite value like add 0 at 00 postion and removing the element at the last position like 22

// matrix[0][0] = `X`; //Add Numbers
// matrix[0][1] = `O`;
// matrix[0][2] = `X`;

// matrix[1][0] = `O`;
// matrix[1][1] = `X`;
// matrix[1][2] = `O`;

// matrix[2][0] = `X`;
// matrix[2][1] = `O`;
// matrix[2][2] = `X`;

for (const row of matrix) {
    console.log(row.join(" "));
}