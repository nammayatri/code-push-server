import * as Sequelize from "sequelize";



export function createPackage(sequelize: Sequelize.Sequelize) {
    return sequelize.define("package", {
        appVersion: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        blobUrl: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        diffPackageMap: { type: Sequelize.JSON, allowNull: true },
        isDisabled: Sequelize.BOOLEAN,
        isMandatory: Sequelize.BOOLEAN,
        label: { type: Sequelize.STRING, allowNull: true },
        manifestBlobUrl: { type: Sequelize.STRING, allowNull: true },
        originalDeployment: { type: Sequelize.STRING, allowNull: true },
        originalLabel: { type: Sequelize.STRING, allowNull: true },
        packageHash: { type: Sequelize.STRING, allowNull: false },
        releasedBy: { type: Sequelize.STRING, allowNull: true },
        releaseMethod: {
            type: Sequelize.DataTypes.ENUM({
                values: ["Upload", "Promote", "Rollback"]
            })
        },
        rollout: { type: Sequelize.FLOAT, allowNull: true },
        size: { type: Sequelize.FLOAT, allowNull: false },
        uploadTime: { type: Sequelize.TIME, allowNull: false },
        appId: { type: Sequelize.STRING, allowNull: false, references: {
            model: sequelize.models["apps"],
            key: 'id',
          },},
        accountId: { type: Sequelize.STRING, allowNull: false, references: {
            model: sequelize.models["account"],
            key: 'id',
          },},
        deploymentId: { type: Sequelize.STRING, allowNull: false},
        id: { type: Sequelize.STRING, allowNull: false , primaryKey: true},
    })
}

