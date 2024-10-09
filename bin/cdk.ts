#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RdsSnapshotExportPipelineStack, RdsEventId, RdsSnapshotType } from '../lib/rds-snapshot-export-pipeline-stack';

const app = new cdk.App();
new RdsSnapshotExportPipelineStack(app, 'RdsSnapshotExportToS3Pipeline', {
  dbName: 'spotship-dev2-cluster',
  rdsEvents:
    [
      {
        rdsEventId: RdsEventId.DB_AUTOMATED_SNAPSHOT_CREATED,
        rdsSnapshotType: RdsSnapshotType.DB_AUTOMATED_SNAPSHOT
      }
    ],
  s3BucketName: 'spot-ship-dev-db-backups',
});
